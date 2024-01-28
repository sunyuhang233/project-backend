enum CachType{
    LOCAL,
    SESSION
}


class MyCache{
    private  instance: Storage;
    constructor(type: CachType) { 
        this.instance = type === CachType.LOCAL ? localStorage : sessionStorage;
    }

    set(key: string, value: any): void{
        if(!value) return;
        this.instance.setItem(key, JSON.stringify(value));
    }

    get(key: string): any{
        const value = this.instance.getItem(key);
        if(!value) return null;
        return JSON.parse(value);
    }

    remove(key: string): void{
        this.instance.removeItem(key);
    }

    clear(): void{
        this.instance.clear();
    }
}

const localCache = new MyCache(CachType.LOCAL);
const sessionCache = new MyCache(CachType.SESSION);

export {
    localCache,
    sessionCache
}