import { useState, useCallback, JSX } from 'react';
import { OrgProfile } from '@lib/adoptionState';
import { validateOrgProfile } from '@lib/adoptionValidator';

export interface SettingsPanelProps {
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
}

export function SettingsPanel({ orgProfile, onProfileUpdate }: SettingsPanelProps): JSX.Element {
  const [profile, setProfile] = useState<OrgProfile>(orgProfile);

  const handleTrustChange = useCallback((value: string) => {
    const updated = { ...profile, trustName: value };
    setProfile(updated);

    const validation = validateOrgProfile(updated);
    if (!validation.isValid) {
      console.warn('Organization profile validation errors:', validation.errors);
    }

    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Organisation Settings</h2>
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            NHS Trust / Organisation Name
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            value={profile.trustName}
            onChange={(e) => handleTrustChange(e.target.value)}
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Programme / Project Name
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            value={profile.projectName || ''}
            onChange={(e) => handleProjectChange(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Lead Submitter (Change Lead)
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            value={profile.leadName || ''}
            onChange={(e) => handleLeadChange(e.target.value)}
          />
        </div> */}
      </div>
    </div>
  );
}
