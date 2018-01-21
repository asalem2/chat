import { Router } from "@angular/router/src/router";
import {CommonService} from "../../services/common.service";
import {LocalStorageService} from "ngx-webstorage";
import { Component } from "@angular/core/src/metadata/directives";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
    moduleId: module.id,
})
export class HomeComponent implements OnInit {
    username: string;
    frq: string;

    constructor(private commonService: CommonService, private router: Router, private localSt: LocalStorageService) { }

    ngOnInit (){
        this.username = this.commonService.username;
    }

    join(){
        if(this.frq.length && this.username.length){
            this.localSt.store('username', this.username);
            this.router.navigate(['/chat', this.frq]);
        }
    }
}