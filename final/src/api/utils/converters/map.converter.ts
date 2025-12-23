export class MapConvertor {
    public static convertMapKeysWithPrefix(
        map: Record<string, string>, 
        prefixes: string[] | Set<string>
    ): Record<string, string> {
        const result: Record<string, string> = {};
        const prefixList = Array.isArray(prefixes) ? prefixes : Array.from(prefixes);

        Object.entries(map).forEach(([key, value]) => {
            let newKey = key;
            for (const prefix of prefixList) {
                const prefixWithDot = prefix.endsWith('.') ? prefix : `${prefix}.`;
                if (key.startsWith(prefixWithDot)) {
                    newKey = key.substring(prefixWithDot.length);
                    break; 
                }
            }
            result[newKey] = value;
        });
        
        return result;
    }
}