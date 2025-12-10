import React from 'react';
import { teamMembers } from '@/app/admin/team/page';
import Link from 'next/link';

const TeamOverview = () => {

    return (
        <div className="rounded-3xl p-px bg-linear-to-br from-gray-200 to-gray-50">
            <div className="bg-white rounded-[23px] p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-800 font-display">Team Members</h3>
                    <Link href="/admin/team" className="text-xs font-medium text-primary hover:underline font-manrope">
                        View All
                    </Link>
                </div>

                <div className="space-y-4">
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100">
                                {/* Use next/image in production, using div for now to match previous style or img tag */}
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-gray-800 truncate font-manrope">{member.name}</h4>
                                <p className="text-xs text-gray-500 truncate font-manrope">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamOverview;
