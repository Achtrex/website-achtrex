import React from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import TeamMemberCard from '@/components/admin/team-member-card';

export const teamMembers = [
        {
            name: 'Achim Godwin Tetteh',
            email: 'achim.godwin@achtrex.com',
            role: 'CEO & Operations Project Manager',
            image: '/about-us/members/achim.jpg'
        },
        {
            name: 'Dr. Emmanuel Yeboah-Appiah',
            email: 'emmanuel.yeboah@achtrex.com',
            role: 'CFO',
            image: '/about-us/members/emmanuella.jpg'
        },
        {
            name: 'Elvis Boahen Gyau',
            email: 'elvis.gyau@achtrex.com',
            role: 'Full Stack Developer',
            image: '/about-us/members/elvis.jpg'
        },
        {
            name: 'Junior Achim',
            email: 'junior.achim@achtrex.com',
            role: 'Business Analyst and QA',
            image: '/about-us/members/jnr-achim.jpg'
        },
        {
            name: 'Kojo Thompson',
            email: 'kojo.thompson@achtrex.com',
            role: 'SEO & ASO',
            image: '/about-us/members/Thompson.jpg'
        },
        {
            name: 'Dede Davis',
            email: 'dede.davis@achtrex.com',
            role: 'Machine Learning Engineer',
            image: '/about-us/members/dede.jpg'
        }
    ];

const TeamPage = () => {

    return (
        <div className="p-8 bg-gray-50">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
