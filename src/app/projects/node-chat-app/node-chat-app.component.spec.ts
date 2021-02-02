import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeChatAppComponent } from './node-chat-app.component';

describe('NodeChatAppComponent', () => {
  let component: NodeChatAppComponent;
  let fixture: ComponentFixture<NodeChatAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeChatAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeChatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
