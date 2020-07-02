export interface Comment {
    id: number,
    postId: number,
    body: string
}

export interface Props {
    comments: Comment[]
}