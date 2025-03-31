import { ChangeEvent } from "react";

interface ImageDimensions {
  width: number;
  height: number;
}

interface ValidationConfig {
  maxSizeInMB: number;
  maxWidth: number;
  maxHeight: number;
}

interface ValidationError {
  message: string;
  type: 'size' | 'dimension';
}

const DEFAULT_CONFIG: ValidationConfig = {
  maxSizeInMB: 1,
  maxWidth: 600,
  maxHeight: 600,
};

const getImageDimensions = (file: File): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve({
        width: image.width,
        height: image.height,
      });
      URL.revokeObjectURL(image.src); // Clean up
    };

    image.onerror = () => {
      reject(new Error('Failed to load image'));
      URL.revokeObjectURL(image.src); // Clean up
    };

    image.src = URL.createObjectURL(file);
  });
};

const validateFileSize = (file: File, maxSizeInMB: number): ValidationError | null => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  if (file.size > maxSizeInBytes) {
    return {
      message: `File is too large. Maximum size is ${maxSizeInMB}MB.`,
      type: 'size',
    };
  }

  return null;
};

const validateDimensions = (
  dimensions: ImageDimensions,
  maxWidth: number,
  maxHeight: number
): ValidationError | null => {
  if (dimensions.width > maxWidth || dimensions.height > maxHeight) {
    return {
      message: `File is too large dimensionally. Maximum is ${maxWidth}x${maxHeight} pixels.`,
      type: 'dimension',
    };
  }

  return null;
};

export const fileValidator = async (
  event: ChangeEvent,
  config: Partial<ValidationConfig> = {}
): Promise<void> => {
  const target = event.target as HTMLInputElement;
  const files = target.files;

  if (!files?.length) {
    return;
  }

  const file = files[0];
  const validationConfig = { ...DEFAULT_CONFIG, ...config };

  try {
    // Validate file size
    const sizeError = validateFileSize(file, validationConfig.maxSizeInMB);
    if (sizeError) {
      console.error(sizeError.message);
      alert(sizeError.message);
      target.value = "";
      return;
    }

    // Validate image dimensions
    const dimensions = await getImageDimensions(file);
    const dimensionError = validateDimensions(
      dimensions,
      validationConfig.maxWidth,
      validationConfig.maxHeight
    );

    if (dimensionError) {
      console.error(dimensionError.message);
      alert(dimensionError.message);
      target.value = "";
      return;
    }

  } catch (error) {
    console.error('File validation failed:', error);
    alert('Failed to validate image file');
    target.value = "";
  }
};