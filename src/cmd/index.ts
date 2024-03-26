import { ArgumentParser } from "argparse";

import executeStartupCommands from "./startup";

const parser = new ArgumentParser({
    description: "Good roots startup"
});

// Run startup instructions
parser.add_argument("--start", {
    help: "Run startup instructions",
    action: "store_true"
});

// Enable autostart
parser.add_argument("--enable", {
    help: "Enable startup by creating a startup command",
    action: "store_true"
});

/**
 * Execute commands
 */
export default async function executeCommands() {
    const args = parser.parse_args();
    
    await executeStartupCommands(args);
    
    // process.exit(0);
};

executeCommands();
