import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsList, StatisticText } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    const statArray = [
        { statItem: good, title: 'Good'},
        { statItem: neutral, title: 'Neutral'},
        { statItem: bad, title: 'Bad'},
        { statItem: total, title: 'Total feedbacks'},
        { statItem: positivePercentage, title: 'Positive feedbacks'},
    ];

    return (
<StatisticsList>
{statArray.map(({ statItem, title }) => (<StatisticsItem key={title}><StatisticText>
    {title} : {''}
    <span>
        {title !== 'Positive feedbacks' ? statItem : positivePercentage + '%'}</span></StatisticText> </StatisticsItem>))}

</StatisticsList>

    );
};

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
}