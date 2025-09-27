import { basicInfoSchema } from './BasicInfo.schema';
import { emailVerificationSchema } from './EmailVerification.schema';
import { businessDetailsSchema } from './BusinessDetails.schema';

export const combinedSchema = basicInfoSchema.merge(emailVerificationSchema).merge(businessDetailsSchema);

export { basicInfoSchema, emailVerificationSchema, businessDetailsSchema };
