import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Position } from 'src/app/models/position/position';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.css'],
})
export class PositionAddComponent implements OnInit {
  positionAddForm: FormGroup;
  positions: Position[] = [];
  constructor(
    private positionService: PositionService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createPositionAddForm();
    this.getAllPositions();
  }

  createPositionAddForm() {
    this.positionAddForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  getAllPositions() {
    this.positionService.getAll().subscribe((response: any) => {
      this.positions = response.data;
    });
  }

  addPosition() {
    if (this.positionAddForm.valid) {
      if (this.checkDuplicate(this.positionAddForm.value)) {
        this.positionService
          .addPosition(this.positionAddForm.value)
          .subscribe((response) => {
            this.toastrService.success('Successfully added');
            this.pageReloadDelay();
          });
      }
    }
  }

  checkDuplicate(position: Position) {
    let title = this.positions.find(
      (t) => t.title.toLowerCase().trim() === position.title.toLowerCase().trim()
    );

    if (title) {
      this.toastrService.error('This position exists.');
      return false;
    } else {
      return true;
    }
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
