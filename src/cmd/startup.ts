import startInstructions from "../start/index";

/**
 * Startup
 */
export default async function executeStartupCommands(args: any) {
    if(args.enable) {
        
    }
    
    if(args.start) {
        await startInstructions();
    }
}
