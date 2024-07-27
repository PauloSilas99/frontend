import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    { subject: 'TypeScript', A: 5, fullMark: 10 },
    { subject: 'React Js', A: 7, fullMark: 10 },
    { subject: 'React Native', A: 6, fullMark: 10 },
    { subject: 'Node', A: 5, fullMark: 10 },
    { subject: 'Figma', A: 8, fullMark: 10 },
    { subject: 'Vue', A: 6, fullMark: 10 },
  ];
const RadarTecnologia = () => (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="tecnologia" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
  
  export default RadarTecnologia;