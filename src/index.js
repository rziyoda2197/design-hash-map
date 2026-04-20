class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill(null);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  put(key, value) {
    const index = this._hash(key);
    if (this.map[index] === null) {
      this.map[index] = [[key, value]];
    } else {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          this.map[index][i][1] = value;
          return;
        }
      }
      this.map[index].push([key, value]);
    }
  }

  get(key) {
    const index = this._hash(key);
    if (this.map[index] !== null) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          return this.map[index][i][1];
        }
      }
    }
    return null;
  }

  remove(key) {
    const index = this._hash(key);
    if (this.map[index] !== null) {
      for (let i = 0; i < this.map[index].length; i++) {
        if (this.map[index][i][0] === key) {
          this.map[index].splice(i, 1);
          return;
        }
      }
    }
  }
}
```

Kodda quyidagilar mavjud:

- `HashMap` klassi yaratildi, unda `size` o'zgaruvchisi saqlanadi, bu HashMapning kattaligi.
- `_hash` metodda kiritilgan kalitni hash qiladi va undan kattalikni olib, natijani qaytaradi.
- `put` metodda kalit va qiymat kiritiladi, agar kiritilgan kalit mavjud bo'lsa, uning qiymati yangilab qoyiladi, aks holda yangi kalit-qimmat jufti qo'shiladi.
- `get` metodda kalit kiritiladi va uning qiymati qaytariladi, agar kalit mavjud bo'lsa, aks holda `null` qaytariladi.
- `remove` metodda kalit kiritiladi va uning qiymati o'chiriladi, agar kalit mavjud bo'lsa.
