import {PipeTransform,ArgumentMetadata} from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata): any {
        console.log('value',value);
        console.log('metadata',metadata);
        return value;
    }
}