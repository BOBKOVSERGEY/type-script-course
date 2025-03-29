/*type Modifier = 'read' | 'write' | 'create'

type UserRoles = {
    customers?: Modifier
    projects?: Modifier
    adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
    +readonly [Property in keyof Type]-?: boolean
}

type UserAccess = {
    customers?: boolean
    projects?: boolean
    adminPanel?: boolean
}*/