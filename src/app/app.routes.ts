import { Routes } from '@angular/router';
import { Notes } from './pages/notes/notes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
    },
    {
        path: 'notes',
        component: Notes
    }
];
