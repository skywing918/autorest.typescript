import "@typespec/http";
namespace OpenAI;
using TypeSpec.OpenAPI;
using TypeSpec.Http;

model CreateTranscriptionRequest {
  /**
   * The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4,
   * mpeg, mpga, m4a, ogg, wav, or webm.
   */
  @extension("x-oaiTypeLabel", "file")
  file: HttpPart<bytes>;

  /** ID of the model to use. Only `whisper-1` is currently available. */
  @extension("x-oaiTypeLabel", "string")
  `model`: HttpPart<string | "whisper-1">;

  /**
   * An optional text to guide the model's style or continue a previous audio segment. The
   * [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
   */
  prompt?: HttpPart<string>;

  /**
   * The format of the transcript output, in one of these options: json, text, srt, verbose_json, or
   * vtt.
   */
  response_format?: HttpPart<"json" | "text" | "srt" | "verbose_json" | "vtt">;

  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
   * random, while lower values like 0.2 will make it more focused and deterministic. If set to 0,
   * the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to
   * automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: HttpPart<float64>;

  /**
   * The language of the input audio. Supplying the input language in
   * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy
   * and latency.
   */
  language?: HttpPart<string>;
}

// Note: This does not currently support the non-default response format types.
model CreateTranscriptionResponse {
  text: string;
}

model CreateTranslationRequest {
  /**
   * The audio file object (not file name) to translate, in one of these formats: flac, mp3, mp4,
   * mpeg, mpga, m4a, ogg, wav, or webm.
   */
  @extension("x-oaiTypeLabel", "file")
  file: HttpPart<bytes>;

  /** ID of the model to use. Only `whisper-1` is currently available. */
  @extension("x-oaiTypeLabel", "string")
  `model`: HttpPart<string | "whisper-1">;

  /**
   * An optional text to guide the model's style or continue a previous audio segment. The
   * [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
   */
  prompt?: HttpPart<string>;

  // NOTE: this is just string in the actual API?
  /**
   * The format of the transcript output, in one of these options: json, text, srt, verbose_json, or
   * vtt.
   */
  response_format?: HttpPart<"json" | "text" | "srt" | "verbose_json" | "vtt">;

  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
   * random, while lower values like 0.2 will make it more focused and deterministic. If set to 0,
   * the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to
   * automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: HttpPart<float64>;
}

// Note: This does not currently support the non-default response format types.
model CreateTranslationResponse {
  text: string;
}
