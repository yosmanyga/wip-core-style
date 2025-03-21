import type {InteractUnnormalizedProps} from "./Interact";
import type {PseudoUnnormalizedProps} from "./Pseudo";
import type {SpacialUnnormalizedProps} from './Spacial'
import type {TextUnnormalizedProps} from './Text'
import type {VisualUnnormalizedProps} from './Visual'

export type {InteractUnnormalizedProps}
export type {PseudoUnnormalizedProps}
export type {SpacialUnnormalizedProps}
export type {TextUnnormalizedProps}
export type {VisualUnnormalizedProps}

// All props are needed to be used by abstract ui libs used for both web and mobile
export type UnnormalizedProps =
    InteractUnnormalizedProps
    & PseudoUnnormalizedProps
    & SpacialUnnormalizedProps
    & TextUnnormalizedProps
    & VisualUnnormalizedProps
