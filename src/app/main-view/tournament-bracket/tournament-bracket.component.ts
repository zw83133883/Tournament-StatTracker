import { Component } from '@angular/core';

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.css']
})
export class TournamentBracketComponent {
  rounds: any[] = [
    [
      { team1: '', team2: '' },
      { team1: '', team2: '' },
    ],
    [
      { team1: '', team2: '' },
    ],
    [
      { team1: '', team2: '' },
    ]
  ];
}