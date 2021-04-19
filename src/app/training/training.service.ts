import { Subject } from "rxjs/Subject";

import { Exercise } from "./exercise.model";

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();

    private availableExercises: Exercise[] = [
        { id: 'cycle', name: 'Cycle', duration: 30, calories: 8},
        { id: 'mountainBike', name: 'Mountain Bike', duration: 30, calories: 8},
        { id: 'swim', name: 'Swim', duration: 30, calories: 8},
        { id: 'run', name: 'Run', duration: 30, calories: 8},
        { id: 'functionalTraining', name: 'Functional Training', duration: 30, calories: 8},
        { id: 'rockClimb', name: 'Rock Climb', duration: 30, calories: 8},
        { id: 'lift', name: 'Weights', duration: 30, calories: 8},
    ];
    private currentExercise: Exercise;

    getAvailableExercises() {
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string) {
        this.currentExercise = this.availableExercises.find(ex => ex.id === selectedId);
        this.exerciseChanged.next
    }
}