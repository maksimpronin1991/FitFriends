
export function createEntity(entityData: string, type: string): any{

  if (type === 'user') {
    return entityData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.trimEnd().split('\t'))
      .map(([
        name,
        email,
        avatar,
        password,
        gender,
        birthdate,
        role,
        description,
        location,
        image,
        createdAt,
        trainingLevel,
        trainingTypes,
        trainingDuration,
        caloriesPerDay,
        caloriesPerWorkout,
        isAvailableForTraining,
        certificates,
        achievements,
        privateTraining
      ]) => ({
        name,
        email,
        avatar,
        password,
        gender,
        birthdate,
        role,
        description,
        location,
        image,
        createdAt,
        trainingLevel,
        trainingTypes,
        trainingDuration,
        caloriesPerDay,
        caloriesPerWorkout,
        isAvailableForTraining,
        certificates,
        achievements,
        privateTraining,
      }));
  }

  if (type === 'training') {
    return entityData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.trimEnd().split('\t'))
      .map(([
        title,
        backgroundImage,
        level,
        trainingType,
        duration,
        price,
        calories,
        description,
        gender,
        video,
        rating,
        trainer,
        specialOffer
      ]) => ({
        title,
        backgroundImage,
        level,
        trainingType,
        duration,
        price,
        calories,
        description,
        gender,
        video,
        rating,
        trainer,
        specialOffer
      }));

  }

  if (type === 'review') {
    return entityData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.trimEnd().split('\t'))
      .map(([
        author,
        training,
        rating,
        text,
        createdAt
      ]) => ({
        author,
        training,
        rating,
        text,
        createdAt
      }));
  }

  if (type === 'order') {
    return entityData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.trimEnd().split('\t'))
      .map(([
        viewOrder,
        service,
        price,
        quantity,
        orderPrice,
        payMethod,
        createdOrderDate
      ]) => ({
        viewOrder,
        service,
        price,
        quantity,
        orderPrice,
        payMethod,
        createdOrderDate
      }));
  }

  if (type === 'notification') {
    return entityData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.trimEnd().split('\t'))
      .map(([
        date,
        user,
        message
      ]) => ({
        date,
        user,
        message
      }));
  }

  if (type === 'userBalance') {
    return entityData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.trimEnd().split('\t'))
      .map(([
        training,
        quantityTraining
      ]) => ({
        training,
        quantityTraining
      }));

  }

  if (type === 'personalTraining') {
    return entityData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.trimEnd().split('\t'))
      .map(([
        Initiator,
        User,
        DateCreated,
        DateStatusChanged,
        RequestStatus
      ]) => ({
        Initiator,
        User,
        DateCreated,
        DateStatusChanged,
        RequestStatus
      }));
  }
}
