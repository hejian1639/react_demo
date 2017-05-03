import React from 'react'
import styles from './styles.css'

declare function require(name:string): string;

export default class Responsive extends React.Component<{}, {}> {


    render() {
        return (
            <div style={{padding: '1rem .5rem', fontSize: '1.3rem', lineHeight: '1.2', maxWidth: '60rem', margin: '0 auto', color: '#333'}}>
                <div className={styles.Header}>
                    <img src={require("./img/SOC-Logo.png")} alt="Scone O'Clock logo" />
                    <p className={styles.Strap}>Scones: the most resplendent of snacks</p>
                </div>
                <div className={styles.IntroWrapper}>
                    <p className={styles.IntroText}>Occasionally maligned and misunderstood; the scone is a quintessentially British classic.</p>
                    <div className={styles.MoneyShot}>
                        <img className={styles.MoneyShotImg} style={{maxWidth: '100%'}} src={require("./img/scones.jpg")} alt="Incredible scones" />
                        <p className={styles.ImageCaption}>Incredible scones, picture from Wikipedia</p>
                    </div>
                </div>
                <p>Recipe and serving suggestions follow.</p>
                <div className={styles.Ingredients}>
                    <h3 className={styles.SubHeader}>Ingredients</h3>
                    <ul>
                        <li>350g self-raising flour, and a little spare for dusting</li>
                        <li>¼ tsp salt</li>
                        <li>1 tsp baking powder</li>
                        <li>85g butter, cut into cubes</li>
                        <li>3 tbsp caster sugar</li>
                        <li>175ml milk</li>
                        <li>1 tsp vanilla extract</li>
                        <li>squeeze lemon juice (see Know-how below)</li>
                        <li>beaten egg, to glaze</li>
                        <li>jam and clotted cream, to serve</li>
                    </ul>
                </div>
                <div className={styles.HowToMake}>
                    <h3 className={styles.SubHeader}>Method</h3>
                    <ol className={styles.MethodWrapper}>
                        <li>Heat the oven to 220&deg;C (or gas mark 7). Tip the flour into a large bowl along with the salt and baking powder, then mix it all up. Add the butter in, then rub the butter in with your fingers until the mix looks like fine crumbs. When that is done, stir in the sugar.</li>
                        <li>Put the milk into a jug and heat in the microwave for about 20-30 seconds. It should be warm but not hot. Add the vanilla and lemon juice to the milk and then put that to one side and but a baking tray in the oven to warm.</li>
                        <li>Make a well in the dry mix, then add the liquid and combine it quickly with a cutlery knife – it will seem pretty wet at first. Spread some flour onto the work surface and tip the dough out. Dredge the dough and your hands with a little more flour, then fold the dough over 2-3 times until it's smoother. Now pat it into a round shape about 4cm deep.</li>
                        <li>Take a 5cm cutter (Pro-tip – smooth-edged cutters tend to cut more cleanly, giving a better rise) and dip it into some flour. Plunge into the dough, then repeat until you have four scones. By this point you’ll probably need to press what's left of the dough back into a round to cut out another four.</li>
                        <li>Brush the tops with beaten egg, then place onto the hot baking tray.</li>
                        <li>Bake for 10 minutes until risen and golden on the top. Eat just warm or cold on the day of baking, generously (and I do mean generously) topped with jam and clotted cream. </li>
                        <li>If freezing, freeze once cool. Defrost, then put in a low oven (about 160&deg;C) for a few minutes to refresh.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

