import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqComponent } from './faq.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the item open state when the title is clicked', () => {
    const itemIndex = 1;
    const item = component.faqItems[itemIndex];

    expect(item.open).toBeFalse();
    component.toggleItem(itemIndex);
    expect(item.open).toBeTrue();
    component.toggleItem(itemIndex);
    expect(item.open).toBeFalse();
  });
});
