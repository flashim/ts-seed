import {Calculator} from "./arithmetic/Arithmetic";
import {ScientificCalculator} from "./arithmetic/Arithmetic";

export function sum(a : number, b : number) : number {
    return a + b;
}
/**
 * 
 * 
 * @export
 * @class Startup
 */
export class Startup {
    /**
     * 
     * 
     * @static
     * @returns {number} 
     * @memberof Startup
     */
    public static main() : number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();