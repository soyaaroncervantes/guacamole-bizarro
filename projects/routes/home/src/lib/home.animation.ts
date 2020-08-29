import { animate, style, transition, trigger } from '@angular/animations';

export const slideLeftTrigger = trigger( 'slideLeftState', [
  transition( ':enter', [
    style({ transform: 'transitionX(-100%)' }),
    animate( 4000,
      style({ transform: 'transitionX( 0 )' }),
    )
  ])
]);
