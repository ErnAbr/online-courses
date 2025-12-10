import { CanDeactivateFn } from '@angular/router';
import { MemberProfile } from '../../features/members/member-profile/member-profile';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberProfile> = (component) => {
  if (!component.editForm?.dirty) {
    return confirm('Are You Sure You Want To Continue? All Unsaved Changes Will be Lost');
  }

  return true;
};
