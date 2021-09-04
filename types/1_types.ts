// boolean
const isFetching: boolean = true
const isLoading: boolean = false

//number
let int: number = 42
const float: number = 42.2
const num: number = 3e20
const message: string = 'Hello Typescript'

//array
const numberArray: number[] = [1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13]
const stringArray: string[] = ['hello', 'typescript']
const stringArray2: Array<string> = ['hello', 'typescript']

//Tuple
const contact: [string, number] = ['Ilya', 21]

//Any
let variable: any = 42
variable = 'new string'
variable = []

//-----
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Ilya')

//never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
        //danger
    }
}

//Type
type Login = string
type ID = string | number
type SomeType = string | null | undefined

const login: Login = 'admin'
const id1: ID = 1234
const id2: ID = '1234'
