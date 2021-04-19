export interface Exercise {
    id: string;
    name: string;
    duration: number;
    sets?: number;
    reps?: number;
    weight?: number;
    calories: number;
    date?: Date;
    state?: 'completed' | 'cancelled' | null;
}