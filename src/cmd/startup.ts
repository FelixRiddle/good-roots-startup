import startInstructions from "../start/index";
import DotDesktop from "../DotDesktop";

/**
 * Startup
 */
function enableStartup() {
    const folderDirectory = `${__dirname}/../../`;
    
    const cmd = `cd ${folderDirectory} && npm run start -- --start`;
    const dot = new DotDesktop("good-roots", cmd);
    dot.setName("Good roots startup")
        .saveAtStartup();
}

/**
 * Startup
 */
export default async function executeStartupCommands(args: any) {
    if(args.enable) {
        enableStartup();
    }
    
    if(args.start) {
        await startInstructions();
    }
}
