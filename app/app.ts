// Excersice
type KEY_ONLY_STRING = string;
class Map<T extends number | string> {
    private map: { [key: string]: T } = {}
    setItem(key: KEY_ONLY_STRING, item: T) {
        this.map[key] = item;
    }
    getItem(key: KEY_ONLY_STRING) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}
const numberMap = new Map<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
const stringMap = new Map<string>();
stringMap.setItem('name', 'Gaurav')
stringMap.setItem('age', "27");
stringMap.printMap();

