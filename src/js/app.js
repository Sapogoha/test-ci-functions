export default function healthChecker(character) {
  let healthLevel;
  const healthPoints = character.health;
  if (healthPoints > 50) {
    healthLevel = 'healthy';
  } else if (healthPoints < 15) {
    healthLevel = 'critical';
  } else {
    healthLevel = 'wounded';
  }
  return healthLevel;
}
