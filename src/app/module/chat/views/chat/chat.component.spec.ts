import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { Component } from '@angular/core/src/metadata/directives';

describe('ChatComponent', () => {
    let component: ChatComponent;
    let fixture: Component<ChatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChatComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatComponent);
        component = fixture.detectChanges();
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});