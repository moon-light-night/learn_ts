interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 15
    }
}
rect2.color = 'black'
rect2.size.width = 999

const rect3 = {} as Rect
const rect4 = <Rect>{}

//-----------
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123456',
    size: {
        width: 5,
        height: 5
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//-----------
interface IClock {
    date: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    date = new Date()
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//--------------
interface Styles {
    [key: string]: string
}

const css: Styles = {
    color: 'black',
    border: '1px solid red',
    marginTop: '2px'
}