import {
    registerColor,
    ktPrimaryButtonForeground,
    ktPrimaryButtonBackground,
    ktPrimaryButtonClickBackground
} from '@opensumi/ide-theme';
import { localize } from '@opensumi/ide-core-browser';

export const ktToolbarButtonSelectionForeground = registerColor(
    'kt.toolbarButton.selectionForeground',
    {
        dark: 'red',
        light: 'green',
        hcDark: null,
        hcLight: null
    },
    localize('Active toolbar button foreground.')
);
export const ktToolbarButtonSelectionBackground = registerColor(
    'kt.toolbarButton.selectionBackground',
    {
        dark: ktPrimaryButtonBackground,
        light: ktPrimaryButtonBackground,
        hcDark: null,
        hcLight: null
    },
    localize('Active toolbar button background.')
);
export const ktToolbarButtonForeground = registerColor(
    'kt.toolbarButton.foreground',
    {
        dark: ktPrimaryButtonForeground,
        light: ktPrimaryButtonForeground,
        hcDark: null,
        hcLight: null
    },
    localize('Default toolbar button foreground.')
);
export const ktToolbarButtonBackground = registerColor(
    'kt.toolbarButton.background',
    {
        dark: ktPrimaryButtonClickBackground,
        light: ktPrimaryButtonClickBackground,
        hcDark: null,
        hcLight: null
    },
    localize('Default toolbar button background.')
);