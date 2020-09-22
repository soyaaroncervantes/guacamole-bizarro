import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const slideLeftTrigger = trigger( 'slideLeftState', [
  transition( ':enter', [
    animate( '4.3s',
      keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: 0.2,
          offset: .7
        }),
        style({
          opacity: 1,
          offset: 1
        })
      ])
    )
  ])
]);
