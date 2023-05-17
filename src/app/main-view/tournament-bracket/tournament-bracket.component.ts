import { Component } from '@angular/core';

interface Matchup {
  team1: string;
  team2: string;
  winner: string | null;
}

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.css']
})
export class TournamentBracketComponent {
  numOfTeams: number = 1;
  rounds: Matchup[][] = [];
  isBracketGenerated: boolean = false;

  generateBracket() {
    if (this.numOfTeams < 2 || this.numOfTeams % 2 !== 0 || !Number.isInteger(this.numOfTeams) || this.numOfTeams <= 0) {
      alert("Please enter a valid even positive number of teams.");
      return;
    }
    
    const numOfRounds = Math.ceil(Math.log2(this.numOfTeams));
  
    this.rounds = [];
    let numOfMatchups = this.numOfTeams / 2;
    for (let round = 0; round < numOfRounds; round++) {
      const matchups: Matchup[] = [];
      for (let matchup = 0; matchup < numOfMatchups; matchup++) {
        matchups.push({
          team1: "",
          team2: "",
          winner: null
        });
      }
      this.rounds.unshift(matchups);
      numOfMatchups /= 2;
    }
  
    this.isBracketGenerated = true;
  }
  
  

  advanceTeam(matchup: Matchup, team: string): void {
    matchup.winner = team;
  }
}
