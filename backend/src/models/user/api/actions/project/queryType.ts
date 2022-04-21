import {UserProjectorType} from "#models/user/methods/project";


interface UserProjectActionQuery {
  /** The projector used to project the user making the project request */
  readonly projector: UserProjectorType;
}


export default UserProjectActionQuery;