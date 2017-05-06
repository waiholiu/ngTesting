import { MyService } from './my.service';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let spy: jasmine.Spy;

  beforeEach(async(() => {

    let fakeMyService = {
      callServer(){
        return null;
      }
    }
    

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        {provide: MyService, useValue: fakeMyService }
      ]
    }).compileComponents();

    spy = spyOn(fakeMyService, 'callServer')
    
      


  }));

   it('should not have called myservice on start up', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(spy.calls.any()).toBe(false, 'callServer called on startup' );
  }));

  it('should call myservice when button is clicked on start up', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);

    expect(spy.calls.any()).toBe(true, 'callServer not called after button is clicked' );
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
