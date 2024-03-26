import fs from "node:fs";

import { AppServer } from "felixriddle.location-selection";

/**
 * Delete app server data
 */
function deleteAppServerConfig() {
    const fileLocation = new AppServer().filePath();
    console.log(`File location: `, fileLocation);
    
    try {
        fs.rmSync(fileLocation);
    } catch(err) {
        // We don't care about errors here
    }
}

/**
 * Run every start instruction
 */
export default async function startInstructions() {
    deleteAppServerConfig();
}
