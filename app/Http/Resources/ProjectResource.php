<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'description' => $this->description,
      'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
      'due_date' => (new Carbon($this->due_date))->format('Y-m-d'),
      'status' =>  $this->status,
      'image_path' => $this->image_path,
      'created_by' => $this->created_by, // Ensure this is correctly set up
      'updated_by' => $this->updated_by,

    ];
  }
}
