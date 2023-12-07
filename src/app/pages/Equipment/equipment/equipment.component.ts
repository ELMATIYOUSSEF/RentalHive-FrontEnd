import { EquipmentServiceService } from '../equipmentservice.service';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Equipment, CEquipment } from './equipment.module';
import { CommonModule, NgForOf } from '@angular/common';
import {FormsModule, NgModel} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { createInjectableType } from '@angular/compiler';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})

export class EquipmentComponent implements OnInit {
    errorFetchingList: string | null = null;
    equipments: Equipment[] = [];
    toSave: Equipment = new CEquipment();
  	private modalService = inject(NgbModal);

    constructor(private equipmentService: EquipmentServiceService){}
  
    ngOnInit(): void {
      this.equipmentService.getEquipments().subscribe((data: Equipment[]) => {
        this.equipments = data;
        console.log(data);
      })
    }
  
    onSubmit(){
      console.log(this.toSave);
      this.equipmentService.addEquipments(this.toSave).subscribe( data => {
        if (data) {
              console.log(data);
            
            this.equipmentService.getEquipments()
            .subscribe({
                next: (equipments) => {
                    this.equipments = equipments;
                    console.log("Saved equipment :", equipments)
                },
                error:(err) => {
                        console.log("Error ana hna "+err.error);
                        this.errorFetchingList = err.error;
                }
            })
          } else {
            console.error("Error: Response data is undefined.");
          }
      })
    }
  
    onSuccessSave(equipment?: Equipment) {
      if(equipment)
        this.equipments.push(equipment);
    }
    public open(items?: Equipment) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.items = items;
      modalRef.componentInstance.ModalTitel = "Equipment item";

      console.log(items);
    }
    public delete(items?: number) {
      this.equipmentService.deleteEquipments(items).subscribe( data => {
          if (data) {
                console.log(data);
              
              this.equipmentService.getEquipments()
              .subscribe({
                  next: (equipments) => {
                      this.equipments = equipments;
                      console.log("deleted successfuly equipment :", equipments)
                  },
                  error:(err) => {
                          console.log("Error ana hna "+err.error);
                          this.errorFetchingList = err.error;
                  }
              })
            } else {
              console.error("Error: .");
            }
          });
    }

    public upDate(id?: number) {
      this.equipments.forEach(e=> {
        if(e.id === id){
          console.log(e.equipmentItems[0].matricul+ " has been updated");
          const modalRef = this.modalService.open(NgbdModalContent);
          modalRef.componentInstance.equipmentUpdate = e;
          modalRef.componentInstance.ModalTitel = "Update Equipment";
        }
      });
    }
    

  }

  
@Component({
	selector: 'ngbd-modal-content',
	standalone: true,
	template: `

		<div class="modal-header">

			<h4 class="modal-title">{{ModalTitel}}</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
    <form action="" (submit)="onSubmit()">
		<div class="modal-body">
      <div *ngIf="items">
        <div *ngFor="let item of items">
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">matricul :</label>
                  <input type="text" class="form-control" id="recipient-name" value="{{item.matricul}}">
                </div>
                <div class="mb-3">
                  <label for="recipient-status" class="col-form-label">status :</label>
                  <input type="text" class="form-control" id="recipient-status" value="{{item.statusEquipementType}}">
              </div>
        </div>
      </div>
      <div *ngIf="!items && equipmentUpdate">
      <div class="mb-3">
                <label for="recipient-name" class="col-form-label">name :</label>
                <input type="text" class="form-control" id="recipient-name" value="{{equipmentUpdate.name}}">
              </div>
              <div class="mb-3">
                <label for="recipient-status" class="col-form-label">Cout Location :</label>
                <input type="text" class="form-control" id="recipient-status" value="{{equipmentUpdate.cout_Location}}">
            </div>
			<div class="mb-3">
                <label for="recipient-name" class="col-form-label">matricul :</label>
                <input type="text" class="form-control" id="recipient-name" value="{{equipmentUpdate.equipmentItems[0].matricul}}">
              </div>
              <div class="mb-3">
                <label for="recipient-status" class="col-form-label">status :</label>
                <input type="text" class="form-control" id="recipient-status" value="{{equipmentUpdate.equipmentItems[0].statusEquipementType}}">
            </div>
      </div>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      <div *ngIf="ModalTitel==='Update Equipment'">			
       <button type="submit" class="btn btn-outline-dark" >update</button>
		  </div>
    </div>

    </form>
	`,
  imports : [ FormsModule ,CommonModule,NgForOf]
})
export class NgbdModalContent  implements OnInit {
	activeModal = inject(NgbActiveModal);
  @Input() equipmentUpdate?:any;
	@Input() items?: any;
	@Input() ModalTitel?: any;
  ngOnInit(): void {
    console.log(this.equipmentUpdate) ;
  }
  onSubmit(){

  }
}
