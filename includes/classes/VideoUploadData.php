<?php


class VideoUploadData
{
    private $videoDataArray,
            $title,
            $description,
            $privacy,
            $category,
            $uploadedBy;

    public function __construct($videoDataArray, $title, $description, $privacy, $category, $uploadedBy)
    {
        $this->videoDataArray = $videoDataArray;
        $this->title = $title;
        $this->description = $description;
        $this->privacy = $privacy;
        $this->category = $category;
        $this->uploadedBy = $uploadedBy;
    }

    /**
     * @return mixed
     */
    public function getVideoDataArray()
    {
        return $this->videoDataArray;
    }

    /**
     * @param mixed $videoDataArray
     */
    public function setVideoDataArray($videoDataArray)
    {
        $this->videoDataArray = $videoDataArray;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getPrivacy()
    {
        return $this->privacy;
    }

    /**
     * @param mixed $privacy
     */
    public function setPrivacy($privacy)
    {
        $this->privacy = $privacy;
    }

    /**
     * @return mixed
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @param mixed $category
     */
    public function setCategory($category)
    {
        $this->category = $category;
    }

    /**
     * @return mixed
     */
    public function getUploadedBy()
    {
        return $this->uploadedBy;
    }

    /**
     * @param mixed $uploadedBy
     */
    public function setUploadedBy($uploadedBy)
    {
        $this->uploadedBy = $uploadedBy;
    }

}