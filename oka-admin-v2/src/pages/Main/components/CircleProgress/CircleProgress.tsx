import { Progress } from 'antd'

interface CircleProgressProps {
    usage: number;
}

export const CircleProgress = ({ usage }: CircleProgressProps): JSX.Element => {
    return <Progress
        percent={usage > 100 ? 100 : usage}
        type='circle'
        trailColor={'transparent'}
        strokeColor={usage >= 100 ? '#e43e3e' : '#1fa772'}
        width={25}
        strokeLinecap='square'
        strokeWidth={25}
        showInfo={false}
    />
}