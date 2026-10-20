'use client';

import dynamic from 'next/dynamic';

const load = (loader: () => Promise<React.ComponentType>) =>
  dynamic(loader, { ssr: false });

export const examples: Record<string, React.ComponentType> = {
  'accordion-arrow-at-beginning': load(() =>
    import('@/registry/default/example/accordion/accordion-arrow-at-beginning').then((m) => m.AccordionArrowStart),
  ),
  'accordion-demo': load(() =>
    import('@/registry/default/example/accordion/accordion-demo').then((m) => m.AccordionDemo),
  ),
  'alert-demo': load(() =>
    import('@/registry/default/example/alert/alert-demo').then((m) => m.AlertDemo),
  ),
  'alert-filled': load(() =>
    import('@/registry/default/example/alert/alert-filled').then((m) => m.AlertFilled),
  ),
  'alert-large': load(() =>
    import('@/registry/default/example/alert/alert-large').then((m) => m.AlertLarge),
  ),
  'alert-light': load(() =>
    import('@/registry/default/example/alert/alert-light').then((m) => m.AlertLight),
  ),
  'alert-lighter': load(() =>
    import('@/registry/default/example/alert/alert-lighter').then((m) => m.AlertLighter),
  ),
  'alert-small': load(() =>
    import('@/registry/default/example/alert/alert-small').then((m) => m.AlertSmall),
  ),
  'alert-stroke': load(() =>
    import('@/registry/default/example/alert/alert-stroke').then((m) => m.AlertStroke),
  ),
  'alert-xsmall': load(() =>
    import('@/registry/default/example/alert/alert-xsmall').then((m) => m.AlertXSmall),
  ),
  'avatar-group-compact-demo': load(() =>
    import('@/registry/default/example/avatar-group-compact/avatar-group-compact-demo').then((m) => m.AvatarGroupDemo),
  ),
  'avatar-group-compact-size': load(() =>
    import('@/registry/default/example/avatar-group-compact/avatar-group-compact-size').then((m) => m.AvatarGroupCompactSize),
  ),
  'avatar-group-compact-stroke': load(() =>
    import('@/registry/default/example/avatar-group-compact/avatar-group-compact-stroke').then((m) => m.AvatarGroupDemo),
  ),
  'avatar-group-demo': load(() =>
    import('@/registry/default/example/avatar-group/avatar-group-demo').then((m) => m.AvatarGroupDemo),
  ),
  'avatar-group-size': load(() =>
    import('@/registry/default/example/avatar-group/avatar-group-size').then((m) => m.AvatarGroupSize),
  ),
  'avatar-as-link': load(() =>
    import('@/registry/default/example/avatar/avatar-as-link').then((m) => m.AvatarAsLink),
  ),
  'avatar-brand-logo': load(() =>
    import('@/registry/default/example/avatar/avatar-brand-logo').then((m) => m.AvatarBrandLogo),
  ),
  'avatar-color': load(() =>
    import('@/registry/default/example/avatar/avatar-color').then((m) => m.AvatarColor),
  ),
  'avatar-composition-1': load(() =>
    import('@/registry/default/example/avatar/avatar-composition-1').then((m) => m.AvatarComposition),
  ),
  'avatar-demo': load(() =>
    import('@/registry/default/example/avatar/avatar-demo').then((m) => m.AvatarDemo),
  ),
  'avatar-indicator-custom-svg': load(() =>
    import('@/registry/default/example/avatar/avatar-indicator-custom-svg').then((m) => m.AvatarIndicatorCustomSVG),
  ),
  'avatar-next-image': load(() =>
    import('@/registry/default/example/avatar/avatar-next-image').then((m) => m.AvatarNextImage),
  ),
  'avatar-notification': load(() =>
    import('@/registry/default/example/avatar/avatar-notification').then((m) => m.AvatarNotification),
  ),
  'avatar-placeholder': load(() =>
    import('@/registry/default/example/avatar/avatar-placeholder').then((m) => m.AvatarPlaceholder),
  ),
  'avatar-size': load(() =>
    import('@/registry/default/example/avatar/avatar-size').then((m) => m.AvatarSize),
  ),
  'avatar-status': load(() =>
    import('@/registry/default/example/avatar/avatar-status').then((m) => m.AvatarStatus),
  ),
  'avatar-text': load(() =>
    import('@/registry/default/example/avatar/avatar-text').then((m) => m.AvatarText),
  ),
  'badge-aschild': load(() =>
    import('@/registry/default/example/badge/badge-aschild').then((m) => m.BadgeAsChild),
  ),
  'badge-colors': load(() =>
    import('@/registry/default/example/badge/badge-colors').then((m) => m.BadgeColors),
  ),
  'badge-demo': load(() =>
    import('@/registry/default/example/badge/badge-demo').then((m) => m.BadgeDemo),
  ),
  'badge-disabled': load(() =>
    import('@/registry/default/example/badge/badge-disabled').then((m) => m.BadgeDisabled),
  ),
  'badge-filled': load(() =>
    import('@/registry/default/example/badge/badge-filled').then((m) => m.BadgeFilled),
  ),
  'badge-light': load(() =>
    import('@/registry/default/example/badge/badge-light').then((m) => m.BadgeLight),
  ),
  'badge-lighter': load(() =>
    import('@/registry/default/example/badge/badge-lighter').then((m) => m.BadgeLighter),
  ),
  'badge-size': load(() =>
    import('@/registry/default/example/badge/badge-size').then((m) => m.BadgeSize),
  ),
  'badge-square': load(() =>
    import('@/registry/default/example/badge/badge-square').then((m) => m.BadgeSquare),
  ),
  'badge-stroke': load(() =>
    import('@/registry/default/example/badge/badge-stroke').then((m) => m.BadgeStroke),
  ),
  'badge-with-dot': load(() =>
    import('@/registry/default/example/badge/badge-with-dot').then((m) => m.BadgeWithDot),
  ),
  'badge-with-icon': load(() =>
    import('@/registry/default/example/badge/badge-with-icon').then((m) => m.BadgeWithIcon),
  ),
  'banner-demo': load(() =>
    import('@/registry/default/example/banner/banner-demo').then((m) => m.BannerDemo),
  ),
  'banner-error': load(() =>
    import('@/registry/default/example/banner/banner-error').then((m) => m.BannerError),
  ),
  'banner-feature': load(() =>
    import('@/registry/default/example/banner/banner-feature').then((m) => m.BannerFeature),
  ),
  'banner-information': load(() =>
    import('@/registry/default/example/banner/banner-information').then((m) => m.BannerInformation),
  ),
  'banner-success': load(() =>
    import('@/registry/default/example/banner/banner-success').then((m) => m.BannerSuccess),
  ),
  'banner-warning': load(() =>
    import('@/registry/default/example/banner/banner-warning').then((m) => m.BannerWarning),
  ),
  'breadcrumb-as-link': load(() =>
    import('@/registry/default/example/breadcrumb/breadcrumb-as-link').then((m) => m.BreadcrumbAsLink),
  ),
  'breadcrumb-demo': load(() =>
    import('@/registry/default/example/breadcrumb/breadcrumb-demo').then((m) => m.BreadcrumbDemo),
  ),
  'breadcrumb-separator': load(() =>
    import('@/registry/default/example/breadcrumb/breadcrumb-separator').then((m) => m.BreadcrumbSeparator),
  ),
  'button-group-demo': load(() =>
    import('@/registry/default/example/button-group/button-group-demo').then((m) => m.ButtonGroupDemo),
  ),
  'button-group-radix-toggle-group': load(() =>
    import('@/registry/default/example/button-group/button-group-radix-toggle-group').then((m) => m.ButtonGroupSize),
  ),
  'button-group-size': load(() =>
    import('@/registry/default/example/button-group/button-group-size').then((m) => m.ButtonGroupSize),
  ),
  'button-aschild': load(() =>
    import('@/registry/default/example/button/button-aschild').then((m) => m.ButtonAsChild),
  ),
  'button-composition-1': load(() =>
    import('@/registry/default/example/button/button-composition-1').then((m) => m.ButtonComposition),
  ),
  'button-demo': load(() =>
    import('@/registry/default/example/button/button-demo').then((m) => m.ButtonDemo),
  ),
  'button-disabled': load(() =>
    import('@/registry/default/example/button/button-disabled').then((m) => m.ButtonDisabled),
  ),
  'button-error': load(() =>
    import('@/registry/default/example/button/button-error').then((m) => m.ButtonError),
  ),
  'button-full-width': load(() =>
    import('@/registry/default/example/button/button-full-width').then((m) => m.ButtonFullWidth),
  ),
  'button-neutral': load(() =>
    import('@/registry/default/example/button/button-neutral').then((m) => m.ButtonNeutral),
  ),
  'button-primary': load(() =>
    import('@/registry/default/example/button/button-primary').then((m) => m.ButtonPrimary),
  ),
  'button-size': load(() =>
    import('@/registry/default/example/button/button-size').then((m) => m.ButtonSize),
  ),
  'button-with-icon': load(() =>
    import('@/registry/default/example/button/button-with-icon').then((m) => m.ButtonWithIcon),
  ),
  'checkbox-demo': load(() =>
    import('@/registry/default/example/checkbox/checkbox-demo').then((m) => m.CheckboxDemo),
  ),
  'checkbox-disabled': load(() =>
    import('@/registry/default/example/checkbox/checkbox-disabled').then((m) => m.CheckboxDisabled),
  ),
  'checkbox-with-label-2': load(() =>
    import('@/registry/default/example/checkbox/checkbox-with-label-2').then((m) => m.CheckboxWithLabel),
  ),
  'checkbox-with-label': load(() =>
    import('@/registry/default/example/checkbox/checkbox-with-label').then((m) => m.CheckboxWithLabel),
  ),
  'color-picker-demo': load(() =>
    import('@/registry/default/example/color-picker/color-picker-demo').then((m) => m.ColorPickerDemo),
  ),
  'color-picker-popover': load(() =>
    import('@/registry/default/example/color-picker/color-picker-popover').then((m) => m.ColorPickerDemo),
  ),
  'command-menu-demo': load(() =>
    import('@/registry/default/example/command-menu/command-menu-demo').then((m) => m.CommandMenuDemo),
  ),
  'compact-button-aschild': load(() =>
    import('@/registry/default/example/compact-button/compact-button-aschild').then((m) => m.CompactButtonAsChild),
  ),
  'compact-button-composition-1': load(() =>
    import('@/registry/default/example/compact-button/compact-button-composition-1').then((m) => m.CompactButtonComposition),
  ),
  'compact-button-demo': load(() =>
    import('@/registry/default/example/compact-button/compact-button-demo').then((m) => m.CompactButtonDemo),
  ),
  'compact-button-disabled': load(() =>
    import('@/registry/default/example/compact-button/compact-button-disabled').then((m) => m.CompactButtonDisabled),
  ),
  'compact-button-full-radius': load(() =>
    import('@/registry/default/example/compact-button/compact-button-full-radius').then((m) => m.CompactButtonFullRadius),
  ),
  'compact-button-ghost': load(() =>
    import('@/registry/default/example/compact-button/compact-button-ghost').then((m) => m.CompactButtonGhost),
  ),
  'compact-button-modifiable': load(() =>
    import('@/registry/default/example/compact-button/compact-button-modifiable').then((m) => m.CompactButtonModifiable),
  ),
  'compact-button-size': load(() =>
    import('@/registry/default/example/compact-button/compact-button-size').then((m) => m.CompactButtonSize),
  ),
  'compact-button-stroke': load(() =>
    import('@/registry/default/example/compact-button/compact-button-stroke').then((m) => m.CompactButtonStroke),
  ),
  'compact-button-white': load(() =>
    import('@/registry/default/example/compact-button/compact-button-white').then((m) => m.CompactButtonWhite),
  ),
  'datepicker-approval': load(() =>
    import('@/registry/default/example/datepicker/datepicker-approval').then((m) => m.DatepickerApprovalDemo),
  ),
  'datepicker-demo': load(() =>
    import('@/registry/default/example/datepicker/datepicker-demo').then((m) => m.DatepickerDemo),
  ),
  'datepicker-popover': load(() =>
    import('@/registry/default/example/datepicker/datepicker-popover').then((m) => m.DatepickerPopoverDemo),
  ),
  'datepicker-range': load(() =>
    import('@/registry/default/example/datepicker/datepicker-range').then((m) => m.DatepickerRangeDemo),
  ),
  'digit-input-demo': load(() =>
    import('@/registry/default/example/digit-input/digit-input-demo').then((m) => m.DigitInputDemo),
  ),
  'digit-input-disabled': load(() =>
    import('@/registry/default/example/digit-input/digit-input-disabled').then((m) => m.DigitInputDisabled),
  ),
  'digit-input-has-error': load(() =>
    import('@/registry/default/example/digit-input/digit-input-has-error').then((m) => m.DigitInputHasError),
  ),
  'digit-input-square': load(() =>
    import('@/registry/default/example/digit-input/digit-input-square').then((m) => m.DigitInputSquare),
  ),
  'divider-content': load(() =>
    import('@/registry/default/example/divider/divider-content').then((m) => m.DividerContent),
  ),
  'divider-demo': load(() =>
    import('@/registry/default/example/divider/divider-demo').then((m) => m.DividerDemo),
  ),
  'divider-line-spacing': load(() =>
    import('@/registry/default/example/divider/divider-line-spacing').then((m) => m.DividerLineSpacing),
  ),
  'divider-line-text': load(() =>
    import('@/registry/default/example/divider/divider-line-text').then((m) => m.DividerLineText),
  ),
  'divider-line': load(() =>
    import('@/registry/default/example/divider/divider-line').then((m) => m.DividerLine),
  ),
  'divider-solid-text': load(() =>
    import('@/registry/default/example/divider/divider-solid-text').then((m) => m.DividerSolidText),
  ),
  'divider-text': load(() =>
    import('@/registry/default/example/divider/divider-text').then((m) => m.DividerText),
  ),
  'dot-stepper-demo': load(() =>
    import('@/registry/default/example/dot-stepper/dot-stepper-demo').then((m) => m.DotStepperDemo),
  ),
  'dot-stepper-radix-tabs': load(() =>
    import('@/registry/default/example/dot-stepper/dot-stepper-radix-tabs').then((m) => m.DotStepperWithRadixTabs),
  ),
  'dot-stepper-size': load(() =>
    import('@/registry/default/example/dot-stepper/dot-stepper-size').then((m) => m.DotStepperDemo),
  ),
  'drawer-basic': load(() =>
    import('@/registry/default/example/drawer/drawer-basic').then((m) => m.DrawerBasic),
  ),
  'drawer-demo': load(() =>
    import('@/registry/default/example/drawer/drawer-demo').then((m) => m.DrawerDemo),
  ),
  'dropdown-demo': load(() =>
    import('@/registry/default/example/dropdown/dropdown-demo').then((m) => m.DropdownDemo),
  ),
  'dropdown-sub-menu': load(() =>
    import('@/registry/default/example/dropdown/dropdown-sub-menu').then((m) => m.DropdownSubMenu),
  ),
  'fancy-button-aschild': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-aschild').then((m) => m.FancyButtonAsChild),
  ),
  'fancy-button-basic': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-basic').then((m) => m.FancyButtonBasic),
  ),
  'fancy-button-composition-1': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-composition-1').then((m) => m.FancyButtonComposition),
  ),
  'fancy-button-demo': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-demo').then((m) => m.FancyButtonDemo),
  ),
  'fancy-button-destructive': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-destructive').then((m) => m.FancyButtonDestructive),
  ),
  'fancy-button-disabled': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-disabled').then((m) => m.FancyButtonDisabled),
  ),
  'fancy-button-neutral': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-neutral').then((m) => m.FancyButtonNeutral),
  ),
  'fancy-button-primary': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-primary').then((m) => m.FancyButtonPrimary),
  ),
  'fancy-button-size': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-size').then((m) => m.FancyButtonSize),
  ),
  'fancy-button-with-icon': load(() =>
    import('@/registry/default/example/fancy-button/fancy-button-with-icon').then((m) => m.FancyButtonWithIcon),
  ),
  'file-format-icon-demo': load(() =>
    import('@/registry/default/example/file-upload/file-format-icon-demo').then((m) => m.FileFormatIconDemo),
  ),
  'file-upload-demo': load(() =>
    import('@/registry/default/example/file-upload/file-upload-demo').then((m) => m.FileUploadDemo),
  ),
  'hint-demo': load(() =>
    import('@/registry/default/example/hint/hint-demo').then((m) => m.HintDemo),
  ),
  'hint-disabled': load(() =>
    import('@/registry/default/example/hint/hint-disabled').then((m) => m.HintDisabled),
  ),
  'hint-has-error': load(() =>
    import('@/registry/default/example/hint/hint-has-error').then((m) => m.HintHasError),
  ),
  'horizontal-stepper-demo': load(() =>
    import('@/registry/default/example/horizontal-stepper/horizontal-stepper-demo').then((m) => m.HorizontalStepperDemo),
  ),
  'horizontal-stepper-radix-tabs': load(() =>
    import('@/registry/default/example/horizontal-stepper/horizontal-stepper-radix-tabs').then((m) => m.HorizontalStepperDemo),
  ),
  'input-affix': load(() =>
    import('@/registry/default/example/input/input-affix').then((m) => m.InputWithAffix),
  ),
  'input-card': load(() =>
    import('@/registry/default/example/input/input-card').then((m) => m.PaymentInput),
  ),
  'input-composition-1': load(() =>
    import('@/registry/default/example/input/input-composition-1').then((m) => m.InputCompositionDemo),
  ),
  'input-counter': load(() =>
    import('@/registry/default/example/input/input-counter').then((m) => m.CounterInputDemo),
  ),
  'input-date-field': load(() =>
    import('@/registry/default/example/input/input-date-field').then((m) => m.InputDateField),
  ),
  'input-demo': load(() =>
    import('@/registry/default/example/input/input-demo').then((m) => m.InputDemo),
  ),
  'input-disabled': load(() =>
    import('@/registry/default/example/input/input-disabled').then((m) => m.InputWithIcon),
  ),
  'input-has-error': load(() =>
    import('@/registry/default/example/input/input-has-error').then((m) => m.InputWithIcon),
  ),
  'input-icon': load(() =>
    import('@/registry/default/example/input/input-icon').then((m) => m.InputWithIcon),
  ),
  'input-inline-affix': load(() =>
    import('@/registry/default/example/input/input-inline-affix').then((m) => m.InputWithAffix),
  ),
  'input-kbd': load(() =>
    import('@/registry/default/example/input/input-kbd').then((m) => m.InputWithKbd),
  ),
  'input-label-hint': load(() =>
    import('@/registry/default/example/input/input-label-hint').then((m) => m.InputLabelHint),
  ),
  'input-password-levels': load(() =>
    import('@/registry/default/example/input/input-password-levels').then((m) => m.InputPassword),
  ),
  'input-password': load(() =>
    import('@/registry/default/example/input/input-password').then((m) => m.InputPassword),
  ),
  'input-size': load(() =>
    import('@/registry/default/example/input/input-size').then((m) => m.InputSize),
  ),
  'input-with-button': load(() =>
    import('@/registry/default/example/input/input-with-button').then((m) => m.InputWithButton),
  ),
  'input-with-tags': load(() =>
    import('@/registry/default/example/input/input-with-tags').then((m) => m.InputWithTags),
  ),
  'kbd-demo': load(() =>
    import('@/registry/default/example/kbd/kbd-demo').then((m) => m.KbdDemo),
  ),
  'label-demo': load(() =>
    import('@/registry/default/example/label/label-demo').then((m) => m.LabelDemo),
  ),
  'link-button-aschild': load(() =>
    import('@/registry/default/example/link-button/link-button-aschild').then((m) => m.LinkButtonAsChild),
  ),
  'link-button-black': load(() =>
    import('@/registry/default/example/link-button/link-button-black').then((m) => m.LinkButtonBlack),
  ),
  'link-button-composition-1': load(() =>
    import('@/registry/default/example/link-button/link-button-composition-1').then((m) => m.LinkButtonComposition),
  ),
  'link-button-demo': load(() =>
    import('@/registry/default/example/link-button/link-button-demo').then((m) => m.LinkButtonDemo),
  ),
  'link-button-disabled': load(() =>
    import('@/registry/default/example/link-button/link-button-disabled').then((m) => m.LinkButtonDisabled),
  ),
  'link-button-error': load(() =>
    import('@/registry/default/example/link-button/link-button-error').then((m) => m.LinkButtonError),
  ),
  'link-button-gray': load(() =>
    import('@/registry/default/example/link-button/link-button-gray').then((m) => m.LinkButtonGray),
  ),
  'link-button-modifiable': load(() =>
    import('@/registry/default/example/link-button/link-button-modifiable').then((m) => m.LinkButtonModifiable),
  ),
  'link-button-primary': load(() =>
    import('@/registry/default/example/link-button/link-button-primary').then((m) => m.LinkButtonPrimary),
  ),
  'link-button-size': load(() =>
    import('@/registry/default/example/link-button/link-button-size').then((m) => m.LinkButtonSize),
  ),
  'link-button-underline': load(() =>
    import('@/registry/default/example/link-button/link-button-underline').then((m) => m.LinkButtonUnderline),
  ),
  'link-button-with-icon': load(() =>
    import('@/registry/default/example/link-button/link-button-with-icon').then((m) => m.LinkButtonWithIcon),
  ),
  'modal-demo': load(() =>
    import('@/registry/default/example/modal/modal-demo').then((m) => m.ModalDemo),
  ),
  'modal-header': load(() =>
    import('@/registry/default/example/modal/modal-header').then((m) => m.ModalHeader),
  ),
  'notification-action': load(() =>
    import('@/registry/default/example/notification/notification-action').then((m) => m.NotificationWithAction),
  ),
  'notification-demo': load(() =>
    import('@/registry/default/example/notification/notification-demo').then((m) => m.NotificationDemo),
  ),
  'notification-secondary-action': load(() =>
    import('@/registry/default/example/notification/notification-secondary-action').then((m) => m.NotificationWithSecondaryAction),
  ),
  'notification-variants': load(() =>
    import('@/registry/default/example/notification/notification-variants').then((m) => m.NotificationVariants),
  ),
  'notification-with-link': load(() =>
    import('@/registry/default/example/notification/notification-with-link').then((m) => m.NotificationWithLink),
  ),
  'pagination-as-link': load(() =>
    import('@/registry/default/example/pagination/pagination-as-link').then((m) => m.PaginationAsLink),
  ),
  'pagination-demo': load(() =>
    import('@/registry/default/example/pagination/pagination-demo').then((m) => m.PaginationDemo),
  ),
  'pagination-group': load(() =>
    import('@/registry/default/example/pagination/pagination-group').then((m) => m.PaginationGroup),
  ),
  'pagination-rounded': load(() =>
    import('@/registry/default/example/pagination/pagination-rounded').then((m) => m.PaginationRounded),
  ),
  'popover-demo': load(() =>
    import('@/registry/default/example/popover/popover-demo').then((m) => m.PopoverDemo),
  ),
  'popover-position': load(() =>
    import('@/registry/default/example/popover/popover-position').then((m) => m.PopoverPosition),
  ),
  'progress-bar-color': load(() =>
    import('@/registry/default/example/progress-bar/progress-bar-color').then((m) => m.ProgressBarColor),
  ),
  'progress-bar-demo': load(() =>
    import('@/registry/default/example/progress-bar/progress-bar-demo').then((m) => m.ProgressBarDemo),
  ),
  'progress-bar-example-2': load(() =>
    import('@/registry/default/example/progress-bar/progress-bar-example-2').then((m) => m.ProgressBarExample2),
  ),
  'progress-bar-with-label': load(() =>
    import('@/registry/default/example/progress-bar/progress-bar-with-label').then((m) => m.ProgressBarDemo),
  ),
  'progress-circle-demo': load(() =>
    import('@/registry/default/example/progress-circle/progress-circle-demo').then((m) => m.ProgressCircleDemo),
  ),
  'progress-circle-size': load(() =>
    import('@/registry/default/example/progress-circle/progress-circle-size').then((m) => m.ProgressCircleDemo),
  ),
  'radio-demo': load(() =>
    import('@/registry/default/example/radio/radio-demo').then((m) => m.RadioDemo),
  ),
  'radio-disabled': load(() =>
    import('@/registry/default/example/radio/radio-disabled').then((m) => m.RadioDisabled),
  ),
  'radio-with-label-2': load(() =>
    import('@/registry/default/example/radio/radio-with-label-2').then((m) => m.RadioWithLabel),
  ),
  'radio-with-label': load(() =>
    import('@/registry/default/example/radio/radio-with-label').then((m) => m.RadioWithLabel),
  ),
  'rating-bar-demo': load(() =>
    import('@/registry/default/example/rating/rating-bar-demo').then((m) => m.RatingBarDemo),
  ),
  'rating-bar-heart': load(() =>
    import('@/registry/default/example/rating/rating-bar-heart').then((m) => m.RatingBarDemo),
  ),
  'rating-bar-single': load(() =>
    import('@/registry/default/example/rating/rating-bar-single').then((m) => m.RatingBarDemo),
  ),
  'rating-bar-textarea': load(() =>
    import('@/registry/default/example/rating/rating-bar-textarea').then((m) => m.RatingBarDemo),
  ),
  'rating-cell-demo': load(() =>
    import('@/registry/default/example/rating/rating-cell-demo').then((m) => m.RatingCellDemo),
  ),
  'rating-review-demo': load(() =>
    import('@/registry/default/example/rating/rating-review-demo').then((m) => m.RatingReviewDemo),
  ),
  'rating-review-with-label': load(() =>
    import('@/registry/default/example/rating/rating-review-with-label').then((m) => m.RatingReviewDemo),
  ),
  'segmented-control-demo': load(() =>
    import('@/registry/default/example/segmented-control/segmented-control-demo').then((m) => m.SegmentedControlDemo),
  ),
  'segmented-control-rounded': load(() =>
    import('@/registry/default/example/segmented-control/segmented-control-rounded').then((m) => m.SegmentedControlRounded),
  ),
  'select-compact-country': load(() =>
    import('@/registry/default/example/select/select-compact-country').then((m) => m.SelectCompactCountry),
  ),
  'select-compact-for-input-size': load(() =>
    import('@/registry/default/example/select/select-compact-for-input-size').then((m) => m.SelectWithInputSize),
  ),
  'select-compact-for-input': load(() =>
    import('@/registry/default/example/select/select-compact-for-input').then((m) => m.SelectWithInput),
  ),
  'select-compact-size': load(() =>
    import('@/registry/default/example/select/select-compact-size').then((m) => m.SelectCompactSize),
  ),
  'select-compact': load(() =>
    import('@/registry/default/example/select/select-compact').then((m) => m.SelectCompact),
  ),
  'select-country': load(() =>
    import('@/registry/default/example/select/select-country').then((m) => m.SelectCountry),
  ),
  'select-demo': load(() =>
    import('@/registry/default/example/select/select-demo').then((m) => m.SelectBrand),
  ),
  'select-disabled': load(() =>
    import('@/registry/default/example/select/select-disabled').then((m) => m.SelectDisabled),
  ),
  'select-inline-country': load(() =>
    import('@/registry/default/example/select/select-inline-country').then((m) => m.SelectInlineCountry),
  ),
  'select-inline-with-input': load(() =>
    import('@/registry/default/example/select/select-inline-with-input').then((m) => m.InputWithInlineSelect),
  ),
  'select-label': load(() =>
    import('@/registry/default/example/select/select-label').then((m) => m.SelectWithLabelHint),
  ),
  'select-payment-method': load(() =>
    import('@/registry/default/example/select/select-payment-method').then((m) => m.SelectPaymentMethod),
  ),
  'select-payment': load(() =>
    import('@/registry/default/example/select/select-payment').then((m) => m.SelectPayment),
  ),
  'select-size': load(() =>
    import('@/registry/default/example/select/select-size').then((m) => m.SelectPayment),
  ),
  'select-user': load(() =>
    import('@/registry/default/example/select/select-user').then((m) => m.SelectUser),
  ),
  'slider-demo': load(() =>
    import('@/registry/default/example/slider/slider-demo').then((m) => m.SliderDemo),
  ),
  'slider-range': load(() =>
    import('@/registry/default/example/slider/slider-range').then((m) => m.SliderRange),
  ),
  'slider-with-tooltip': load(() =>
    import('@/registry/default/example/slider/slider-with-tooltip').then((m) => m.SliderWithTooltip),
  ),
  'status-badge-aschild': load(() =>
    import('@/registry/default/example/status-badge/status-badge-aschild').then((m) => m.StatusBadgeAsChild),
  ),
  'status-badge-completed': load(() =>
    import('@/registry/default/example/status-badge/status-badge-completed').then((m) => m.StatusBadgeCompleted),
  ),
  'status-badge-demo': load(() =>
    import('@/registry/default/example/status-badge/status-badge-demo').then((m) => m.StatusBadgeDemo),
  ),
  'status-badge-disabled': load(() =>
    import('@/registry/default/example/status-badge/status-badge-disabled').then((m) => m.StatusBadgeDisabled),
  ),
  'status-badge-failed': load(() =>
    import('@/registry/default/example/status-badge/status-badge-failed').then((m) => m.StatusBadgeFailed),
  ),
  'status-badge-pending': load(() =>
    import('@/registry/default/example/status-badge/status-badge-pending').then((m) => m.StatusBadgePending),
  ),
  'switch-demo': load(() =>
    import('@/registry/default/example/switch/switch-demo').then((m) => m.SwitchDemo),
  ),
  'switch-disabled': load(() =>
    import('@/registry/default/example/switch/switch-disabled').then((m) => m.SwitchDisabled),
  ),
  'switch-with-label-2': load(() =>
    import('@/registry/default/example/switch/switch-with-label-2').then((m) => m.SwitchxWithLabel),
  ),
  'switch-with-label': load(() =>
    import('@/registry/default/example/switch/switch-with-label').then((m) => m.SwitchxWithLabel),
  ),
  'tab-menu-horizontal-demo': load(() =>
    import('@/registry/default/example/tab-menu-horizontal/tab-menu-horizontal-demo').then((m) => m.TabMenuHorizontalDemo),
  ),
  'tab-menu-horizontal-scroll': load(() =>
    import('@/registry/default/example/tab-menu-horizontal/tab-menu-horizontal-scroll').then((m) => m.TabMenuHorizontalScroll),
  ),
  'tab-menu-vertical-demo': load(() =>
    import('@/registry/default/example/tab-menu-vertical/tab-menu-vertical-demo').then((m) => m.TabMenuVerticalDemo),
  ),
  'tab-menu-vertical-styled-container': load(() =>
    import('@/registry/default/example/tab-menu-vertical/tab-menu-vertical-styled-container').then((m) => m.TabMenuVerticalStyledContainer),
  ),
  'tab-menu-vertical-with-heading': load(() =>
    import('@/registry/default/example/tab-menu-vertical/tab-menu-vertical-with-heading').then((m) => m.TabMenuVerticalWithHeading),
  ),
  'data-table-demo': load(() =>
    import('@/registry/default/example/table/data-table-demo').then((m) => m.DataTableDemo),
  ),
  'tag-demo': load(() =>
    import('@/registry/default/example/tag/tag-demo').then((m) => m.TagDemo),
  ),
  'tag-disabled': load(() =>
    import('@/registry/default/example/tag/tag-disabled').then((m) => m.TagDisabled),
  ),
  'tag-dismissable': load(() =>
    import('@/registry/default/example/tag/tag-dismissable').then((m) => m.TagDismissable),
  ),
  'tag-gray': load(() =>
    import('@/registry/default/example/tag/tag-gray').then((m) => m.TagGray),
  ),
  'tag-stroke': load(() =>
    import('@/registry/default/example/tag/tag-stroke').then((m) => m.TagStroke),
  ),
  'tag-with-avatar': load(() =>
    import('@/registry/default/example/tag/tag-with-avatar').then((m) => m.TagWithAvatar),
  ),
  'tag-with-image': load(() =>
    import('@/registry/default/example/tag/tag-with-image').then((m) => m.TagWithImage),
  ),
  'textarea-demo': load(() =>
    import('@/registry/default/example/textarea/textarea-demo').then((m) => m.TextareaDemo),
  ),
  'textarea-disabled': load(() =>
    import('@/registry/default/example/textarea/textarea-disabled').then((m) => m.TextareaDisabled),
  ),
  'textarea-has-error': load(() =>
    import('@/registry/default/example/textarea/textarea-has-error').then((m) => m.TextareaHasError),
  ),
  'textarea-interactive-counter': load(() =>
    import('@/registry/default/example/textarea/textarea-interactive-counter').then((m) => m.TextareaInteractiveCounter),
  ),
  'textarea-label-hint': load(() =>
    import('@/registry/default/example/textarea/textarea-label-hint').then((m) => m.TextareaLabelHint),
  ),
  'textarea-simple-disabled': load(() =>
    import('@/registry/default/example/textarea/textarea-simple-disabled').then((m) => m.TextareaSimpleDisabled),
  ),
  'textarea-simple-has-error': load(() =>
    import('@/registry/default/example/textarea/textarea-simple-has-error').then((m) => m.TextareaSimpleHasError),
  ),
  'textarea-simple-resize': load(() =>
    import('@/registry/default/example/textarea/textarea-simple-resize').then((m) => m.TextareaSimpleResize),
  ),
  'textarea-simple': load(() =>
    import('@/registry/default/example/textarea/textarea-simple').then((m) => m.TextareaSimple),
  ),
  'toast-demo': load(() =>
    import('@/registry/default/example/toast/toast-demo').then((m) => m.ToastDemo),
  ),
  'toast-non-dismissable': load(() =>
    import('@/registry/default/example/toast/toast-non-dismissable').then((m) => m.ToastNonDismissable),
  ),
  'toast-sonner-options': load(() =>
    import('@/registry/default/example/toast/toast-sonner-options').then((m) => m.ToastSonnerOptions),
  ),
  'tooltip-demo': load(() =>
    import('@/registry/default/example/tooltip/tooltip-demo').then((m) => m.TooltipDemo),
  ),
  'tooltip-html-content': load(() =>
    import('@/registry/default/example/tooltip/tooltip-html-content').then((m) => m.TooltipHTMLContent),
  ),
  'tooltip-light': load(() =>
    import('@/registry/default/example/tooltip/tooltip-light').then((m) => m.TooltipLight),
  ),
  'tooltip-position': load(() =>
    import('@/registry/default/example/tooltip/tooltip-position').then((m) => m.TooltipPosition),
  ),
  'tooltip-size': load(() =>
    import('@/registry/default/example/tooltip/tooltip-size').then((m) => m.TooltipSize),
  ),
  'vertical-stepper-demo': load(() =>
    import('@/registry/default/example/vertical-stepper/vertical-stepper-demo').then((m) => m.VerticalStepperDemo),
  ),
  'vertical-stepper-radix-tabs': load(() =>
    import('@/registry/default/example/vertical-stepper/vertical-stepper-radix-tabs').then((m) => m.VerticalStepperDemo),
  ),
};
