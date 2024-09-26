export type Patiens = {
    id: string
    name: string,
    caretaker: string,
    email: string,
    date: Date,
    symptoms: string
}

export type DraftPatiens = Omit<Patiens, 'id'>