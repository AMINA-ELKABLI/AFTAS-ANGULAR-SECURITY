import { Component } from '@angular/core';
import { Member } from 'src/app/core/model/Member';
import { MemberService } from 'src/app/core/service/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
    memberLoading = false;
    alertType: string = '';
    alertMessage: string = '';
    showAlert: boolean = false;
    member: Member= {} as Member;
    constructor(
      private memberService:MemberService,
    ) { }

    ngOnInit(): void {
    }
    addMember(){
      console.log(this.member);
      if(!this.validate()){
        return;
      }
      this.memberLoading = true;
      this.memberService.addMember(this.member).subscribe(
        (data)=>{
          this.memberLoading = false;
          this.showAlertMessage("Member created successfully","success");
        },
        (error:any)=>{
          this.memberLoading = false;
          this.showAlertMessage("Error creating member "+error.error.message,"danger");
        }
      );
    }
    validate(){
      if(this.member.name==''
        || this.member.familyName==''
        || this.member.nationality==''
        || this.member.identityDocumentType==null
        || this.member.identityNumber==null
        || this.member.accessionDate==null
        ){
          this.showAlertMessage("Please fill all the fields","warning");
        return false;
        }
      return true;
    }
    showAlertMessage(message:string, type:string){
      this.alertType = type;
      this.alertMessage = message;
      this.showAlert = true;
    }
    handleAlertClose(){
      this.showAlert = false;
    }



}
