import { $ } from "bun";

const ports = process.argv.slice(2);

async function killPort(port: string) {
  console.log(`kill processes on port ${port}`);

  while (true) {
    try {
      const pids = (await $`lsof -ti tcp:${port}`.text()).trim();

      if (pids) {
        console.log(`killing pid ${pids} on port ${port}`);
        await $`kill -9 ${pids}`;
        await new Promise(resolve => setTimeout(resolve, 1000)); // sleep 1

        // Check if port is still in use
        try {
          await $`lsof -ti tcp:${port}`;
          console.log(`Port ${port} is still in use. Attempting to kill again...`);
        } catch {
          console.log(`Successfully killed all processes on port ${port}.`);
          break;
        }
      } else {
        console.log(`No processes found on port ${port}.`);
        break;
      }
    } catch (error) {
      console.log(`No processes found on port ${port}.`);
      break;
    }
  }

  // Debug information
  console.log(`Debugging information for port ${port}:`);
  console.log(`Processes listening on port ${port}:`);
  await $`lsof -i :${port}`.catch(() => console.log('No processes'));
  console.log(`Network connections on port ${port}:`);
  await $`netstat -an | grep :${port}`.catch(() => console.log('No connections'));
  console.log(`Process tree for any remaining processes on port ${port}:`);
  await $`pgrep -f ${port} | xargs pstree -p`.catch(() => console.log('No process tree'));
}

async function main() {
  if (ports.length === 0) {
    console.error('Please provide at least one port number');
    process.exit(1);
  }

  for (const port of ports) {
    await killPort(port);
  }
}

main().catch(console.error);
