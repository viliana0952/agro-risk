import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatRadioModule],
  exports: [MatButtonModule, MatDividerModule, MatIconModule, MatRadioModule],
})
export class MaterialModule {}
