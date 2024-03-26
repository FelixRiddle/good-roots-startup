import fs from "node:fs";
import { homedir } from "os";

export type DesktopEntryType = "Application" | "Link" | "Directory";

/**
 * Dot desktop
 */
export default class DotDesktop {
    data: string = "[Desktop Entry]\n";
    desktopEntryType: string = "Application";
    name: string = "My app";
    cmd: string;
    comment: string = "Some system app, please don't remove";
    fileName: string;
    
    /**
     * 
     * @param cmd 
     */
    constructor(fileName: string, cmd: string) {
        this.fileName = fileName;
        this.cmd = cmd;
    }
    
    /**
     * Set type
     */
    setType(desktopEntryType: DesktopEntryType) {
        this.desktopEntryType = desktopEntryType;
    }
    
    /**
     * Set application name
     */
    setName(name: string) {
        this.name = name;
    }
    
    /**
     * Set command
     */
    setCmd(cmd: string) {
        this.cmd = cmd;
    }
    
    /**
     * Get the complete desktop entry as a string
     */
    get(): string {
        this.data = this.data.concat(`Type=${this.desktopEntryType}`, "\n");
        this.data = this.data.concat(`Name=${this.name}`, "\n");
        this.data = this.data.concat(`Comment=${this.comment}`, "\n");
        this.data = this.data.concat(`Exec=${this.cmd}`, "\n");
        
        return this.data;
    }
    
    /**
     * Save at
     * 
     * Unify fields and save as a .desktop file at a given path
     */
    saveAt(folderPath: string) {
        // Case of failing create the file why not
        fs.writeFileSync(`${folderPath}/${this.fileName}`, this.get());
    }
    
    /**
     * Save at startup folder
     * 
     * Save file at the startup folder
     * 
     * Currently only works on linux
     */
    saveAtStartup() {
        const userFolder = `${homedir()}/.config/autostart`;
        fs.writeFileSync(`${userFolder}/${this.fileName}`, this.get());
    }
}